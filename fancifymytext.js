// ── Bigger! button ────────────────────────────────────────────────────────────
// Each click increases the textarea font size by 4pt (starts at 14pt baseline).
function makeBigger() {
    var textArea = document.getElementById("myText");
    var current  = parseFloat(textArea.style.fontSize) || 14;
    textArea.style.fontSize = (current + 4) + "pt";
}

// ── FancyShmancy / BoringBetty radio buttons ──────────────────────────────────
// FancyShmancy → bold + blue + underline
// BoringBetty  → reset all three back to normal
function applyFancyStyle() {
    var textArea = document.getElementById("myText");
    var fancy    = document.getElementById("fancyShmancy");

    if (fancy.checked) {
        textArea.style.fontWeight     = "bold";
        textArea.style.color          = "blue";
        textArea.style.textDecoration = "underline";  // w3schools.com/cssref/pr_text_text-decoration.php
    } else {
        textArea.style.fontWeight     = "normal";
        textArea.style.color          = "";
        textArea.style.textDecoration = "none";
    }
}

// ── Moo button ────────────────────────────────────────────────────────────────
// 1. Uppercases all text in the textarea.
// 2. Appends "-MOO" to the last word of every sentence (ends with ".").
function mooify() {
    var textArea = document.getElementById("myText");

    // Step 1 – uppercase everything
    var text = textArea.value.toUpperCase();

    // Step 2 – add -MOO to last word of each sentence
    // Split on "." so each element is one sentence (last element may be empty)
    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i];

        if (sentence.trim() === "") continue;   // skip empty trailing segment

        // Split sentence into words, find last non-empty word, tag it
        var words = sentence.split(" ");
        for (var j = words.length - 1; j >= 0; j--) {
            if (words[j].trim() !== "") {
                words[j] = words[j] + "-MOO";
                break;
            }
        }
        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(".");
}
