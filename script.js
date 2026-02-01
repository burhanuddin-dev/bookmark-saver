const bookmarkNameField = document.querySelector(".bookmark-name");
const bookmarkUrlField = document.querySelector(".bookmark-url");
const addBookmarkBtn = document.querySelector(".bookmark-add-btn");
const bookmarkList = document.querySelector(".bookmark-list");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

addBookmarkBtn.addEventListener("click", () => {

    let bookmarkName = bookmarkNameField.value.trim();
    let bookmarkUrl = bookmarkUrlField.value.trim();

    if(!bookmarkName || !bookmarkUrl) {
        alert("All Fields are Required!");
        return;
    }

    addBookmark(bookmarkName,bookmarkUrl);
});

function addBookmark(bookmarkName, bookmarkUrl) 
{
    setTimeout(clearFields,1200);

    bookmarks.push({
        name: bookmarkName,
        url: bookmarkUrl,
    });

    localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
    displayBookmarks();
}


function clearFields() {
    bookmarkNameField.value = "";
    bookmarkUrlField.value = "";
}

function displayBookmarks() {

    bookmarkList.innerHTML = ``;

    bookmarks.forEach((bookmark,index) => {
        const li = document.createElement("li");
        li.classList.add("bookmark-item");

        li.innerHTML = `<a href="${bookmark.url}" class="bookmark-link" target="_blank">${bookmark.name}</a>
          <button class="bookmark-remove-btn" onclick="removeBookmark(${index})">Remove</button>`

        bookmarkList.appendChild(li);
    });
}

function removeBookmark(index) {

    bookmarks.splice(index,1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    displayBookmarks();
}

displayBookmarks();