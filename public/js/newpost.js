var quill;

window.onload = function() {
    quill = new Quill('#post-content', {
        theme: 'snow'
    });
}

const newpostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = quill.root.innerHTML; // Get HTML content from Quill

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/post');
    } else {
        alert('Something wrong!');
    }
};

document.querySelector('#newpost-form').addEventListener('submit', newpostFormHandler);

document.querySelector('#gif-search-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const searchTerm = document.querySelector('#gif-search').value;

    fetch(`/api/post/search_gifs?q=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            const gifResultsDiv = document.querySelector('#gif-results');
            gifResultsDiv.innerHTML = ''; // clear previous results

            data.forEach(gif => {
                const img = document.createElement('img');
                img.src = gif.images.fixed_height.url; // you might need to adjust this depending on the response structure
                img.alt = 'GIF';
                img.addEventListener('click', function() {
                    const selectedGifUrl = gif.images.fixed_height.url;

                    // Add the selected GIF to Quill
                    const range = quill.getSelection(true);
                    quill.insertEmbed(range.index, 'image', selectedGifUrl);

                    gifResultsDiv.innerHTML = ''; // clear the GIF results
                });
                gifResultsDiv.appendChild(img);
            });
        });
});
