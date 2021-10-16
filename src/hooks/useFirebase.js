import initAuth from "../Firebase/init";
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";





initAuth()
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();




const useFirebase = () => {


// =========================================================================================================================
//                                 this area is belongs to authentication start
// =========================================================================================================================
    const [user,setUser] = useState({})
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [err,setErr] = useState('')


 

    const googleSign = () => {
        return signInWithPopup(auth,googleProvider)
        
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
        }
      });

      const handleEmail = e => {
          setEmail(e.target.value)
      }
      const handlePassword = e => {
          setPassword(e.target.value)
      }


      const handleSignUpMan = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {})
        .catch((error) => {
            setErr(error.message)
        });
    }


    const logInMan = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            setUser(res.user)
        })
        .catch((error) => {
            setErr(error.message)
        });
    }


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
    const [quantities,setQuantities] = useState([])
    const [prices,setPrices] = useState([])
    const [names,setNames] = useState([])
    const [imgs,setImgs] = useState([])
    const [id,setId] = useState(0)
    
        const addToCart = (num,price,id,name,img) => {
        const newquantities = [...quantities,num]
        const newPrice = [...prices,price]
        const newNames = [...names,name]
        const newimg = [...imgs,img]
        setPrices(newPrice)
        setNames(newNames)
        setImgs(newimg)
        setId(id)
        setQuantities(newquantities)
    }
    
    const addedItems = arr => {
        let total = 0
        for (const eachItem of arr) {
            total = total + parseInt(eachItem)
        }
        return total
    }
    
    const placeOrder = () => {
        const zero = [];
        setQuantities(zero)
        setPrices(zero)
        
    }
    return {
        googleSign,
        user,
        id,
        placeOrder,
        logOut,
        breakfast,
        lunch,
        dinner,
        meals,
        addToCart,
        prices,
        quantities,
        logInMan,
        items,
        names,
        imgs,
        addedItems,
        handleEmail,
        handlePassword,
        handleSignUpMan,
        err
    };
};

export default useFirebase;