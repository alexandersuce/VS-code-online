function testerCode() {
    const code = document.getElementById('code-input').value;
    const iframe = document.getElementById('preview-frame');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(code);
    iframeDoc.close();
}

function enregistrerCode() {
    const code = document.getElementById('code-input').value;
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function insertClosingTag(event) {
    const textarea = event.target;
    const value = textarea.value;
    const position = textarea.selectionStart;

    if (event.inputType === 'insertText' && event.data === '>') {
        const openTagMatch = value.slice(0, position).match(/<(\w+)[^>]*>$/);
        if (openTagMatch) {
            const tag = openTagMatch[1];
            const closingTag = `</${tag}>`;
            const newPosition = position + closingTag.length;

            textarea.setRangeText(closingTag, position, position, 'end');
            textarea.setSelectionRange(newPosition, newPosition);
        }
    }
}

document.getElementById('code-input').addEventListener('input', (event) => {
    insertClosingTag(event);
    updateHighlightedCode();
    updateLineNumbers();
    testerCode();
});

function updateHighlightedCode() {
    const code = document.getElementById('code-input').value;
    const highlightedCode = document.getElementById('preview-frame');
    highlightedCode.innerHTML = code;
    Prism.highlightAllUnder(document.getElementById('editor-container'));
}

function updateLineNumbers() {
    const code = document.getElementById('code-input').value;
    const lineNumbers = document.getElementById('line-numbers');
    const lines = code.split('\n');
    const lineCount = lines.length;
    let lineNumbersHTML = '';
    for (let i = 1; i <= lineCount; i++) {
        lineNumbersHTML += `<div>${i}</div>`;
    }
    lineNumbers.innerHTML = lineNumbersHTML;
}

updateHighlightedCode();
updateLineNumbers();
