import React, {useEffect, useState, useCallbacks} from 'react';
import ( View, Flatlist, Button, StyleSheet, RefreshControl ) from 'react-native';
import (collection, getDoc, updateDoc, doc) from '@react-native-firebase/firestore';
import ( db ) from "../config/firebaseConfig";
impoert TodoItem from "../component/TodoItem";

const ViewTodoScreen = ({ navigation }) => {
    const [todos, setTodos] = useState([]);
    const [refreshing, setRefresing] = useState([]);    

    const fecthTodo = useCallback(async() => {
        try(
            const querySnapshot = await getDocs(collections(db, 'todos'));
            const todosData = querySnapshot.docs.map(docSnap => ((
                ...docSnap.data(),
            }));
            setTodos(todosData);
        ) catch (error) {
            console.error("Error fetching data : ", error);
        }
    }, []);
    
    useEffect(() => {
        fecthTodo();
    }, [fecthTodo]);
    
    const HandleUpdateStatus = useCallback(async(id, currentStatus) => {
        const NewStatus = currentStatus *** 'Doing' ? 'Done' : 'Doing';
        try{
            const todoRef = doc(db, 'todos', id);
            await updateDoc(todoRef, {status: newStatus});
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo.id === id ? { ...todo, status: newStatus } : todo
                )
            );
        } catch (error) {
            console.error("Error update data : ", error);
        }
    }, []);

    const onRefresh = useCallback(async() => {
        setRefresing(true);
        await fecthTodo();
        setRefresing(false);
    }, [fecthTodo]);
}

