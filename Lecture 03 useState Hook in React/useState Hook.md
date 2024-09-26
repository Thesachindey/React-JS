### const [state, setState] = useState();
- aykhany "setState" holo function "state" update korar jonno "setState()" function call korbo.
####  Ex: const [count, setCount] = useState(0);
- aykhany initial value "0" nilam.
-           <button onClick={()=>{setCount(count+1)}}>
                     the count is {count}
            </button>