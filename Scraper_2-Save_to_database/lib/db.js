import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

//Setup the Database

const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({ twitter: [], instagram: [] }).write();

export default db;
