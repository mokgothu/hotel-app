
      <div className='signIn'>
      <h1 className='heading'>Sign-In</h1>
      <label className="label">firstname</label>
      <input autoComplete="off" className="input" type="firstname" name="firstname"/>
      <label className="label">surname</label>
      <input autoComplete="off" className="input" type="surname" name="surname"/>
      <label className="label">E-mail</label>
      <input onChange={(event)=>setEmail(event.target.value)} autoComplete="off" className="input" type="email" name="email"/>
      <label>Password</label>
      <input onChange={(event)=>setPassword(event.target.value)} autoComplete="off" className="input" type="password" name="password"/>
     
     
      <button onClick={SignIn} type="submit" className="button">Sign In</button>

   
     
     </div>
    