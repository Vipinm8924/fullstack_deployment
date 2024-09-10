import express from 'express'; 

const app = express();

// when we want to move dict file in backend and this is performed after 'npm run build' cmd. dict create after run this cmd.
//app.use(express.static('dict'))

app.get('/', (req, res) => {
    res.send('Server is raedy');
});

//get a list of 5 jokes.

app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: 'tom and jerry',
            content: 'Once upon a time tom beat jerry'
        },
        {
            id: 2,
            title: 'what happened',
            content: 'nothing is happened'
        },
        {
            id: 3,
            title: 'What is your name',
            content: 'My name is Buddy'
        },
        {
            id: 4,
            title: 'What is your Gender',
            content: 'My gender is male'
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    }
);