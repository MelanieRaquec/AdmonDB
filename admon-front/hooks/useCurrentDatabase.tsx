import {useEffect, useState} from "react";


export function useCurrentDB(DatabaseName:any) {
    const [currentDB, setCurrentDB] = useState([]);
        
        if (DatabaseName !== ""){
            setCurrentDB(DatabaseName);
        }

  
    return currentDB;
}