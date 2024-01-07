export interface Movie {
    id: number | null;
    name: string;
    genre: string;
    image: string;
    releaseYear: string;
    rating: number;
    storyline: string;
}


export const movies: Movie[] = [
    {
        id: 1,
        name: "Game Night",
        genre: "Action",
        // tslint:disable-next-line: max-line-length
        image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
        releaseYear: "2018",
        rating: 3.5,
        // tslint:disable-next-line: max-line-length
        storyline: "Married competitive gamer couple Max and Annie are trying to have a child, but their attempts are unsuccessful due to Max's stress surrounding his feelings of inadequacy when compared to his successful, attractive brother Brooks. During Max and Annie's routine weekend game night with their friends Ryan, and married couple Kevin and Michelle, Brooks shows up Max by arriving in a Corvette Stingray (Max's dream car) and sharing an embarrassing childhood story about Max. Brooks offers to host the next game night at a house he's renting while he's in town. Meanwhile, Max and Annie are trying to keep their game nights secret from their neighbor Gary, an awkward police officer after his divorce from their friend Debbie."
    },
    {
        id: 2,
        name: "Area X: Annihilation",
        genre: "Adventure",
        // tslint:disable-next-line: max-line-length
        image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SY500_CR0,0,320,500_AL_.jpg",
        releaseYear: "2018",
        rating: 3.2,
        // tslint:disable-next-line: max-line-length
        storyline: "A biologist's husband disappears. She puts her name forward for an expedition into an environmental disaster zone, but does not find what she's expecting. The expedition team is made up of the biologist, an anthropologist, a psychologist, a surveyor, and a linguist."
    },
    {
        id: 3,
        name: "Hannah",
        genre: "Drama",
        // tslint:disable-next-line: max-line-length
        image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg",
        releaseYear: "2018",
        rating: 2,
        // tslint:disable-next-line: max-line-length
        storyline: "She's a talented 14 year old pop star. But underneath that blonde hair and makeup lives a normal life of a regular teenage girl. Miley Stewart (Miley Cyrus) is a regular teenager who does normal things but she is also secretly a pop star 'Hannah Montana'. She plays Hannah to live her dreams and show the world her amazing talents but really she's just Miley who is a normal girl who lets Hannah hide her identity with the help of her best friend Lily Truscott (Emily Osment)"
    },
    {
        id: 4,
        name: "The Lodgers",
        genre: "Drama",
        // tslint:disable-next-line: max-line-length
        image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BM2FhM2E1MTktMDYwZi00ODA1LWI0YTYtN2NjZjM3ODFjYmU5XkEyXkFqcGdeQXVyMjY1ODQ3NTA@._V1_SY500_CR0,0,337,500_AL_.jpg",
        releaseYear: "2018",
        rating: 2,
        // tslint:disable-next-line: max-line-length
        storyline: "1920, rural Ireland. Anglo Irish twins Rachel and Edward share a strange existence in their crumbling family estate. Each night, the property becomes the domain of a sinister presence (The Lodgers) which enforces three rules upon the twins: they must be in bed by midnight; they may not permit an outsider past the threshold; if one attempts to escape, the life of the other is placed in jeopardy. When troubled war veteran Sean returns to the nearby village, he is immediately drawn to the mysterious Rachel, who in turn begins to break the rules set out by The Lodgers. The consequences pull Rachel into a deadly confrontation with her brother - and with the curse that haunts them."
    },
    {
        id: 5,
        name: "Beast of Burden",
        genre: "Action",
        // tslint:disable-next-line: max-line-length
        image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNTM3MDQ2NV5BMl5BanBnXkFtZTgwMDI5Nzk1NDM@._V1_SY500_CR0,0,336,500_AL_.jpg",
        releaseYear: "2018",
        rating: 3,
        // tslint:disable-next-line: max-line-length
        storyline: "Sean Haggerty only has an hour to deliver his illegal cargo. An hour to reassure a drug cartel, a hitman, and the DEA that nothing is wrong. An hour to make sure his wife survives. And he must do it all from the cockpit of his Cessna."
    },
    {
        id: 6,
        name: "The Chamber",
        genre: "Horror",
        // tslint:disable-next-line: max-line-length
        image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNTVlODgwMjgtZGUzMy00ZTY1LWIyMDEtYTI2Y2JlYzVjZTNkXkEyXkFqcGdeQXVyNTg0MDM1MzY@._V1_SY500_CR0,0,337,500_AL_.jpg",
        releaseYear: "2018",
        rating: 3,
        // tslint:disable-next-line: max-line-length
        storyline: "Having survived the hatred and bigotry that was his Klansman grandfather's only legacy, young attorney Adam Hall seeks at the last minute to appeal the old man's death sentence for the murder of two small Jewish boys 30 years before. Only four weeks before Sam Cayhall is to be executed, Adam meets his grandfather for the first time in the Mississippi prison which has held him since the crime. The meeting is predictably tense when the educated, young Mr. Hall confronts his venom-spewing elder, Mr. Cayhall, about the murders. The next day, headlines run proclaiming Adam the grandson who has come to the state to save his grandfather, the infamous Ku Klux Klan bomber. While the old man's life lies in the balance, Adam's motivation in fighting this battle becomes clear as the story unfolds. Not only does he fight for his grandfather, but perhaps for himself as well. He has come to heal the wounds of his own father's suicide, to mitigate the secret shame he has always felt for the genetic fluke which made this man his grandfather, and to bring closure -- one way or another -- to the suffering the old man seems to have brought to everyone he has ever known. But, would mercy soften his grandfather's heart?"
    },
    {
        id: 7,
        name: "Survivors Guide to Prison",
        genre: "Documentary",
        // tslint:disable-next-line: max-line-length
        image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNzhmNmI5MDMtZDEyOC00ODkyLTkwODItODQzODAzY2QyZjVlXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SY500_CR0,0,357,500_AL_.jpg",
        releaseYear: "2018",
        rating: 3.5,
        // tslint:disable-next-line: max-line-length
        storyline: "Following the stories of Bruce Lisker and Reggie Cole who spent year after year in prison for murders they didn't commit - audiences get a harrowing look at how barbaric the US justice system is. The film ultimately asks how we can survive the prison model at all, and looks at better solutions for conflict resolution, harm reduction, crime and more. Hosted by filmmaker Matthew Cooke and guest hosting representatives from the massive range of Americans joining forces to change this broken system."
    },
    {
        id: 8,
        name: "Red Sparrow",
        genre: "HMystery",
        // tslint:disable-next-line: max-line-length
        image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_SY500_CR0,0,337,500_AL_.jpg",
        releaseYear: "2018",
        rating: 2,
        // tslint:disable-next-line: max-line-length
        storyline: "A young Russian intelligence officer is assigned to seduce a first-tour CIA agent who handles the CIA's most sensitive penetration of Russian intelligence. The two young officers collide in a charged atmosphere of trade-craft, deception, and inevitably forbidden passion that threatens not just their lives but the lives of others as well."
    },
];