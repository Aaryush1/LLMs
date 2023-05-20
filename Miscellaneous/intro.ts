// This will be Aaryush's first attempt at a typescript LLM application
import * as fs from 'fs';

const filePath = 'key.txt';

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const OPEN_API_KEY = data;
    // You can now use the fileContents variable, which contains the text from the file
    console.log(OPEN_API_KEY);
});

