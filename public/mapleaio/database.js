import { getDatabase, set, ref } from "firebase/database";

const db = getDatabase();

function writeDB(table, key, data)
{
    set(ref(db, table + '/' + key), data);
}

function readDB(table, key)
{
    let readVal = ref(db, table + '/' + key)
    onValue(readVal, (snapshot) => {
        let data = snapshot.val();
        return data;
    }
}