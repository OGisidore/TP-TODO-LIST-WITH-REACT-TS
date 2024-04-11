/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 11/04/2024 10:33:48
*/
import React, { FC, useEffect, Fragment, } from 'react';
// import Loading from '../Loading/Loading';
import './Home.css';


interface HomeProps {

}


const Home: FC<HomeProps> = () => {


  // const [state, setState] = useState<any>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  }, [])

  return (
    <Fragment>
      {

        <div className="Home">
          <div className="container bordered">
            <h1>Todo List Project</h1>
            <form id="todoForm" className='d-flex'>
              <input type="text" name="todo" placeholder="Enter todo ..." id="todo" className='form-control' />
              <button className="btn btn-danger form-control">Add Todo</button>
            </form>
            <ul id="todoList">
              {/* <li>
          <span>Course HTML 5</span>
          <button class="btn btn-primary">Update</button>
          <button class="btn btn-danger">Delete</button>
      </li>
      <li>
          <span>Course CSS 3</span>
          <button class="btn btn-primary">Update</button>
          <button class="btn btn-danger">Delete</button>
      </li>
      <li>
          <input type="text" value="Course JavaScript">
          <button class="btn btn-warning">Save</button>
          <button class="btn btn-danger">Delete</button>
      </li>
      <li>
          <span>Course Bootstrap</span>
          <button class="btn btn-primary">Update</button>
          <button class="btn btn-danger">Delete</button>
      </li>
      <li>
          <span>Course jQuery </span>
          <button class="btn btn-primary">Update</button>
          <button class="btn btn-danger">Delete</button>
      </li> */}
            </ul>
          </div>

        </div>
      }
    </Fragment>
  );
}

export default Home;