window.addEventListener("resize", adjustForScreenWidth);
document.getElementById("search-icon").addEventListener("click", toggleSearchBar);
document.getElementById("hamburger-icon").addEventListener("click", toggleSideBar);
document.getElementById("btn-search-content").addEventListener("click", contentSearch);

function contentSearch() {
    var searchInput = document.getElementById("search-bar");
    console.log(searchInput.value);    
}
function toggleSideBar() {
    {
        const sideBar = document.getElementById("side-bar-section");
        if(sideBar.style.width === "0px" || sideBar.style.width === ""){
            sideBar.style.width = "20vw"
        }
        else{
            sideBar.style.width = "0px"
        }
    }
}

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
    if (window.innerWidth < 550) {
        searchBar.style.display = "none"; // Hide the search bar
        searchBarContainer.style.display = "none"; // Hide the search 
    }
    else {
        searchBar.style.display = "flex"; // Show the search bar
        searchBarContainer.style.display = "flex"; // Show the search 
    }
}
// Initial check to ensure proper visibility on page load
adjustForScreenWidth();
toggleSideBar()