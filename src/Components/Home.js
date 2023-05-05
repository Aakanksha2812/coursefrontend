import './home.css'
function Home() {
  return (
    <div>
      <h1>TCS Course Management System</h1>
      
        <div class="container">
          <div class="row">
            <div class="box1">
            <div class="col">
              <div class="card text-center">
                <div class="card-header">View Course</div>
                <div class="card-body">
                  <h5 class="card-title">Here you can see all courses</h5>
                  <p class="card-text">Click on below button to view course!</p>
                  <a href="/allcourse" class="btn btn-primary">
                    Click Me
                  </a>
                </div>
              </div>
            </div>
</div>
<div class="box2">
            <div class="col">
              <div class="card text-center">
                <div class="card-header">Add Course</div>
                <div class="card-body">
                  <h5 class="card-title">You can add course here!</h5>
                  <p class="card-text">
                    Click on below button to add new course
                  </p>
                  <a href="/addcourse" class="btn btn-primary">
                    Click Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}
export default Home;
