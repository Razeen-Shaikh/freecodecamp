const icons = document.querySelectorAll('.fa');
const edit = document.getElementById('edit');
const view = document.getElementById('view');
const editor = document.querySelector('.editor');
const preview = document.querySelector('.preview');
const textarea = document.getElementById('editor');

edit.addEventListener('click', () => {
  if (preview.classList.contains('d-none')) {
    preview.classList.remove('d-none');
    preview.classList.add('d-block');
    editor.style.width = '50%';
    textarea.rows = 10;
  } else {
    preview.classList.remove('d-block');
    preview.classList.add('d-none');
    editor.style.width = '100%';
    textarea.rows = 25;
  }
})

view.addEventListener('click', () => {
  if (editor.classList.contains('d-none')) {
    editor.classList.remove('d-none');
    editor.classList.add('d-block');
    preview.style.width = '70%';
  } else {
    editor.classList.remove('d-block');
    editor.classList.add('d-none');
    preview.style.width = '100%';
  }
})

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-expand-arrows-alt')) {
      icon.classList.add('fa-compress-arrows-alt');
      icon.classList.remove('fa-expand-arrows-alt');
    } else {
      icon.classList.add('fa-expand-arrows-alt');
      icon.classList.remove('fa-compress-arrows-alt');
    }
  })
})

const setDefault = () => {
  let defaultText =
    `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.`
  let editorField = document.getElementById("editor")
  editorField.value = defaultText;
  document.getElementById("preview").innerHTML = marked(defaultText);
}
const updatePreview = () => {
  document.getElementById("preview").innerHTML = marked(document.getElementById("editor").value);
}

window.addEventListener('load', setDefault)