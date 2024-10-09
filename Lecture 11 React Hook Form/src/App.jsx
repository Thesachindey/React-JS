import { useForm } from 'react-hook-form';
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Submiting the from", data);
  }

  return (
    <>
      {/* for from submition: onSubmit={handleSubmit(onSubmit)} */}
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>First Name: </label>
          {/* for from track:{...register("firstName")} */}
          <input className={errors.firstName ? 'iput-error' : ""}
            {...register('firstName',
              {
                required: { value: true, message: 'Add FirstName' },
                maxLength: { value: 7, message: 'MaxLength atmost 7' },
                minLength: { value: 3, message: 'minLenth atlist 3' },
                pattern: { value: /^[A-Za-z]+$/i, message: 'Text only' }
              }
            )} /> <span style={{ color: 'red' }}> *</span>

          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
        </div>

        <div>
          <label>Middle Name: </label>
          <input className={errors.middleName ? 'iput-error' : ""}
            {...register("middleName")} /><span> opptional</span>
        </div>

        <div>
          <label>Last Name: </label>
          <input className={errors.lastName ? 'iput-error' : ""}
            {...register("lastName",
            {
              required:{value:true, message:'Add LastName'}

            })} />
            <span style={{ color: 'red' }}> *</span>
            {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
        </div>

        <div>
          <label>Net worth: </label>
          <input className={errors.netWorth ? 'iput-error' : ""}
            type='number' {...register("netWorth",
              {
                min: { value: 100, message: '100 is minimum entry' },
                required: { value: true, message: 'Add amount min 100' }
              })} /> <span style={{ color: 'red' }}> *</span>
          {errors.netWorth && <p className='error-msg'>{errors.netWorth.message}</p>}
        </div>

        <br />

        <div>
          <button type='submit'>Submit</button>
        </div>

      </form>
    </>
  )
}

export default App
// 23:40