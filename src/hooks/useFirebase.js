import initAuth from "../Firebase/init";
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";





initAuth()
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();




const useFirebase = () => {



// =========================================================================================================================
//                                 this area is belongs to authentication start
// =========================================================================================================================
    const [user,setUser] = useState({})

    const googleSign = () => {
        signInWithPopup(auth,googleProvider)
        .then(res => {
            setUser(res.user)
        })
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
        }
      });


    const logOut = () => {
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }
// =========================================================================================================================
//                                 this area is belongs to authentication end
// =========================================================================================================================









// =========================================================================================================================
//                                 this area is belongs to menu page start
// =========================================================================================================================
    const [meals,setMeals] = useState([])
    const [items,setItems] = useState([])


    useEffect(()=> {
        fetch('/menu.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])


    useEffect(()=> {
        breakfast()
    },[items])


    const breakfast = () => {
        const update1 = [...items]
        const newItem1 = update1.slice(0,6)
        setMeals(newItem1)
    }
    const lunch = () => {
        const update2 = [...items]
        const newItem2 = update2.slice(7,13)
        console.log(newItem2.length)
        setMeals(newItem2)
    }
    const dinner = () => {
        const update3 = [...items]
        const newItem3 = update3.slice(13,19)
        console.log(newItem3.length)
        setMeals(newItem3)
    }
// =========================================================================================================================
//                                 this area is belongs to menu page end
// =========================================================================================================================
    const [quantity,setQuantity] = useState(0)
const addToCart = (num,price) => {
    console.log(price)
    setQuantity(num)
}

    return {
        googleSign,
        user,
        logOut,
        breakfast,lunch,dinner,
        meals,
        addToCart,
        quantity
    };
};

export default useFirebase;