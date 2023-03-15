// script.js
// get the elements from the html file
const feedbackForm = document.getElementById("feedback-form");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackDescription = document.getElementById("feedback-description");
const submitButton = document.getElementById("submit-button");
const newColumn = document.getElementById("new");
const inProgressColumn = document.getElementById("in-progress");
const resolvedColumn = document.getElementById("resolved");

// create a variable to store the feedback id
let feedbackId = 0;

// create a function to add a new feedback card to the new column
function addFeedbackCard(title, description) {
  // create a new list item element
  const li = document.createElement("li");

  // set the id attribute of the list item element to the feedback id
  li.setAttribute("id", "feedback-" + feedbackId);

  // set the draggable attribute of the list item element to true
  li.setAttribute("draggable", "true");

  // add an event listener for dragstart event on the list item element
  li.addEventListener("dragstart", dragStart);

  // add an event listener for dragend event on the list item element
  li.addEventListener("dragend", dragEnd);

  // create a paragraph element for the title
  const pTitle = document.createElement("p");

  // set the text content of the paragraph element to the title parameter
  pTitle.textContent = title;

  // append the paragraph element to the list item element
  li.appendChild(pTitle);

  // create a paragraph element for the description
  const pDescription = document.createElement("p");

  // set the text content of the paragraph element to the description parameter
  pDescription.textContent = description;

  // append the paragraph element to the list item element
  li.appendChild(pDescription);

  // get the ul element from the new column
  const ul = newColumn.querySelector(".card-list");

  // append the list item element to the ul element
  ul.appendChild(li);

  // increment the feedback id by 1
  feedbackId++;
}

// create a function to handle form submission
function submitFeedback(event) {
  // prevent the default behavior of the form submission
  event.preventDefault();

  // get the value of the feedback title input element
  const title = feedbackTitle.value;

  // get the value of the feedback description textarea element
  const description = feedbackDescription.value;

  // check if the title and description are not empty
  if (title && description) {
    // call the addFeedbackCard function with the title and description as arguments
    addFeedbackCard(title, description);

    // reset the form inputs
    feedbackForm.reset();
  }
}

// create a function to handle drag start event
function dragStart(event) {
  // get the id of the dragged element
  const id = event.target.id;

  // set the data transfer object with the id of the dragged element
  event.dataTransfer.setData("text/plain", id);

  // add a class of dragging to the dragged element
  event.target.classList.add("dragging");
}

// create a function to handle drag end event
function dragEnd(event) {
  // remove a class of dragging from the dragged element
  event.target.classList.remove("dragging");
}

// create a function to handle drag over event
function dragOver(event) {
  // prevent the default behavior of the drag over event
  event.preventDefault();
}

// create a function to handle drop event
function drop(event) {
  // prevent the default behavior of the drop event
  event.preventDefault();

  // get the data from the data transfer object
  const id = event.dataTransfer.getData("text/plain");

  // get the element with that id
  const draggable = document.getElementById(id);

  // get the ul element from this column
  const ul = this.querySelector(".card-list");

  // append the draggable element to the ul element
  ul.appendChild(draggable);
}

// add an event listener for submit event on the feedback form element
feedbackForm.addEventListener("submit", submitFeedback);

// add an event listener for dragover event on the new column element
newColumn.addEventListener("dragover", dragOver);

// add an event listener for drop event on the new column element
newColumn.addEventListener("drop", drop);

// add an event listener for dragover event on the in progress column element
inProgressColumn.addEventListener("dragover", dragOver);

// add an event listener for drop event on the in progress column element
inProgressColumn.addEventListener("drop", drop);

// add an event listener for dragover event on the resolved column element
resolvedColumn.addEventListener("dragover", dragOver);

// add an event listener for drop event on the resolved column element
resolvedColumn.addEventListener("drop", drop);
