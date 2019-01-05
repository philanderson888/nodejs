var people = [
  {
    "_id": "56cb66bb99b8758e502e7262",
    "index": 0,
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "brown",
    "name": "Holman Gordon",
    "gender": "male",
    "friends": [
      {
        "id": 0,
        "name": "Olivia Giles"
      },
      {
        "id": 1,
        "name": "Marva Vazquez"
      },
      {
        "id": 2,
        "name": "Glover Phillips"
      },
      {
        "id": 3,
        "name": "Jewell Nolan"
      }
    ]
  },
  {
    "_id": "56cb66bbcf66abb4a7a97079",
    "index": 1,
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "green",
    "name": "Hyde Emerson",
    "gender": "male",
    "friends": [
      {
        "id": 0,
        "name": "Mclean Nichols"
      },
      {
        "id": 1,
        "name": "Patricia Aguilar"
      },
      {
        "id": 2,
        "name": "Andrews Leon"
      },
      {
        "id": 3,
        "name": "Brigitte Ratliff"
      }
    ]
  },
  {
    "_id": "56cb66bb6362479418c30774",
    "index": 2,
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": "Betty Mercer",
    "gender": "female",
    "friends": [
      {
        "id": 0,
        "name": "Simone Farmer"
      },
      {
        "id": 1,
        "name": "Kathleen Travis"
      },
      {
        "id": 2,
        "name": "Frederick Flowers"
      },
      {
        "id": 3,
        "name": "Bette Underwood"
      }
    ]
  },
  {
    "_id": "56cb66bb09763c2f1d564d0c",
    "index": 3,
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "green",
    "name": "Blackwell Malone",
    "gender": "male",
    "friends": [
      {
        "id": 0,
        "name": "Marquita Mcbride"
      },
      {
        "id": 1,
        "name": "Mcgee Chan"
      },
      {
        "id": 2,
        "name": "Daniel Levy"
      },
      {
        "id": 3,
        "name": "Montgomery Riddle"
      }
    ]
  },
  {
    "_id": "56cb66bb1b73a9daf3a8dee6",
    "index": 4,
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "green",
    "name": "Bean Richards",
    "gender": "male",
    "friends": [
      {
        "id": 0,
        "name": "Meyer Byers"
      },
      {
        "id": 1,
        "name": "Sabrina Duffy"
      },
      {
        "id": 2,
        "name": "Skinner Melendez"
      },
      {
        "id": 3,
        "name": "Angelia Lindsey"
      }
    ]
  },
  {
    "_id": "56cb66bbdaa97d10c237b5f5",
    "index": 5,
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": "Leonor Gibbs",
    "gender": "female",
    "friends": [
      {
        "id": 0,
        "name": "Nita Robertson"
      },
      {
        "id": 1,
        "name": "Murray Nelson"
      },
      {
        "id": 2,
        "name": "Lawanda Perkins"
      },
      {
        "id": 3,
        "name": "Oneil Albert"
      }
    ]
  }
]
console.log('\n\n');
for (var person in people){
	if(people.hasOwnProperty(person)){
		var friendList = '';
    for (var friend in people[person].friends){
    	if(people[person].friends.hasOwnProperty(friend)){
        if (friendList.length>0){
        	friendList += ', ';
        }
    		friendList += people[person].friends[friend].name;
    	}
    }
		console.log('Record ' + 
			person +  
			' has name ' + people[person].name + 
			' who has ' + people[person].eyeColor + 
			' eyes and ' + people[person].friends.length + 
			' friends called ' + friendList + "\n\n"
			);

    console.log('extra line here');
	}
}