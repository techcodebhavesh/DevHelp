const axios = require('axios');
const cheerio = require('cheerio');

// Function to scrape MDN references for a given topic
async function scrapeMDNReferences(topic) {
    try {
        // Make a GET request to the MDN website
        const response = await axios.get(`https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(topic)}`);

        // Print out HTML content for debugging
        console.log(response.data);

        // Load the HTML content of the page using cheerio
        const $ = cheerio.load(response.data);

        // Find all the search result items
        const searchResults = $('.result-item');

        // Extract references from search results
        const references = [];
        searchResults.each((index, element) => {
            const title = $(element).find('.result-title').text().trim();
            const url = $(element).find('.result-title a').attr('href');
            references.push({ title, url });
        });

        return references;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Example usage
const topic = 'JavaScript'; // Enter the topic you want to search for
scrapeMDNReferences(topic)
    .then(references => {
        console.log(`References for ${topic}:`);
        references.forEach((reference, index) => {
            console.log(`${index + 1}. ${reference.title} - ${reference.url}`);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
