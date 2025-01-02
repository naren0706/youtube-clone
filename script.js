window.addEventListener("resize", adjustForScreenWidth);
document.getElementById("search-icon").addEventListener("click", toggleSearchBar);

function toggleSearchBar() {
    {
        const searchBarContainer = document.getElementById("search-bar-container");
        const searchBar = document.getElementById("search-bar");
        if (searchBar.style.display === "none" || searchBar.style.display === "") {
            searchBar.style.display = "flex"; // Show the search bar
            searchBarContainer.style.display = "flex"; // Show the search bar
        } else {
            searchBar.style.display = "none"; // Hide the search bar
            searchBarContainer.style.display = "none"; // Hide the search bar
        }
    }
}

function adjustForScreenWidth() {
    const searchBarContainer = document.getElementById("search-bar-container");
    const searchBar = document.getElementById("search-bar");
    if(window.innerWidth < 550){
        searchBar.style.display = "none"; // Hide the search bar
        searchBarContainer.style.display = "none"; // Hide the search 
    }
    else{
        searchBar.style.display = "flex"; // Show the search bar
        searchBarContainer.style.display = "flex"; // Show the search 
    }    
}
// Initial check to ensure proper visibility on page load
adjustForScreenWidth();