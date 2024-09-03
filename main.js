function analyzeText() {
    const text = document.getElementById('textInput').value;

    const charCount = text.length;

    const words = text.match(/\b\w+\b/g);
    const wordCount = words ? words.length : 0;

    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
    const sentenceCount = sentences ? sentences.length : 0;

    const wordFrequency = {};
    let mostFrequentWord = "";
    let maxFrequency = 0;

    if (words) {
        words.forEach(word => {
            const lowerCaseWord = word.toLowerCase();
            wordFrequency[lowerCaseWord] = (wordFrequency[lowerCaseWord] || 0) + 1;
            if (wordFrequency[lowerCaseWord] > maxFrequency) {
                maxFrequency = wordFrequency[lowerCaseWord];
                mostFrequentWord = lowerCaseWord;
            }
        });
    }

    let longestWord = words ? words.reduce((longest, word) => {
        return word.length > longest.length ? word : longest;
    }, "") : "";

    const wordsPerMinute = 200;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    document.getElementById('charCount').textContent = `Character Count: ${charCount}`;
    document.getElementById('wordCount').textContent = `Word Count: ${wordCount}`;
    document.getElementById('sentenceCount').textContent = `Sentence Count: ${sentenceCount}`;
    document.getElementById('mostFrequentWord').textContent = `Most Frequent Word: ${mostFrequentWord}`;
    document.getElementById('longestWord').textContent = `Longest Word: ${longestWord}`;
    document.getElementById('readingTime').textContent = `Estimated Reading Time: ${readingTime} minute(s)`;
}