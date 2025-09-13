import './App.css'
import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router';
import  AdminLogin  from './pages/admin/AdminLogin';
import  AdminDashBoard  from './pages/admin/AdminDashBoard';
import Session from './pages/admin/Session';
import Subject from './pages/admin/Subject';
import Examination from './pages/admin/Examination';
import Question from './pages/admin/Question';
import Registration from './pages/Registration';
import UserDashboard from './pages/user/UserDashboard';
import Login from './pages/Login';
import Myexams from './pages/user/Myexams';
import Myresult from './pages/user/Myresut';
import Message from './pages/user/Message';
import GetExam from './pages/user/Getexams';
import ChangePassword from './pages/user/ChangePassword';
import  DashBoardHome  from './pages/user/DashBoardHome';
import  Examinee  from './pages/admin/Examinee';
import ReportGeneration from './pages/admin/ReportGeneration';
import  AdminChangepassword  from './pages/admin/AdminChangepassword';
import MessageReply from './pages/admin/MessageReply';
import AdminHomeDashBoard from './pages/admin/AdminHomeDashBoard';







function App() {
  
  return (
    <>
    
      <Router>
        <Routes>
          <Route path='/registration' element={<Registration/>}></Route>
          
          <Route path='/adminDashBoard' element={<AdminDashBoard/>}>
          <Route index element={<AdminHomeDashBoard/>}></Route>
        
          <Route path='session' element={<Session/>}/>
          <Route path='subject' element={<Subject/>}/>
          <Route path='examination' element={<Examination/>}/>
          <Route path='question' element={<Question/>}/>
          <Route path='examinee' element={<Examinee/>}></Route>
          <Route path='reportgeneration' element={<ReportGeneration/>}></Route>
          <Route path='changepassword' element={<AdminChangepassword/>}></Route>
          <Route path='MessageReply' element={<MessageReply/>}></Route>
           </Route>
          <Route path='/adminlogin' element={<AdminLogin/>} ></Route>
          
          {/*user route starts */}

          <Route path='/' element={<Login/>}></Route>
        <Route path='/userDashBoard' element={<UserDashboard/>}>
        <Route index element={<DashBoardHome/>}></Route>
        <Route path='myexams' element={<Myexams/>}></Route>
        <Route path='myresult' element={<Myresult/>}></Route>
        <Route path='getexam/:id' element={<GetExam/>}></Route> 
        <Route path='message' element={<Message/>}></Route>
        <Route path='changepassword' element={<ChangePassword/>}></Route>
         </Route>

       
        {/* user route ends*/}

         </Routes>
      </Router>
    </>
  )
}

export default App
