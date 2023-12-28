import { Client } from "@notionhq/client"
import dotenv from 'dotenv';
dotenv.config()


/*
// config
*/

const notionKey = process.env.NOTION_KEY;
console.log(`notion key ${notionKey}`)
const notion = new Client({ auth: notionKey });
console.log(`notion client object ${notion}`)

for (const key in notion){
  const value = notion[key];
  console.log(`key ${key} .. value ... ${value}`);

  for (const key2 in value) {
    const value2 = value[key2]
    console.log(`key2 .. ${key2} ... value ${value2}`)
  }

}

const databaseId = process.env.NOTION_DATABASE_ID
console.log(`notion database id ${databaseId}`)


const getUsers = async () => {
    const listUsersResponse = await notion.users.list({})
    console.log(listUsersResponse);
}


getUsers();

const search = async () => {
  const response = await notion.search({
    query: 'External tasks',
    filter: {
      value: 'database',
      property: 'object'
    },
    sort: {
      direction: 'ascending',
      timestamp: 'last_edited_time'
    },
  });
  console.log(response);
}
 



async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

// addItem("Yurts in Big Sur, California")