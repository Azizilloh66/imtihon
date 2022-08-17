import React, { useEffect } from 'react'
class backend extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/childrens-middle-grade.json?api-key=0nG5do2caU59G7F2PT1eRQD0RAsaX5Du')
      .then((response) => response.json())
      .then(value => {
        console.log(value.results.books);
        this.setState(value);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <section className='bg-primary '>
          <div className='container justify-content-between  d-flex'>
            <h1 className='text-light'>BookSpace</h1>
            <div>
              <input type="text about_input" className='offset-6 mt-3' />
            </div>
            <button className='btn btn-light '>Serach</button>
            <button className='btn bg-success'>karzin</button>
          </div>
        </section>

        <h1 className='text-danger text-center mt-4 mb-4'>Bestselling books</h1>

        <div className=''>
                <div className='row'>
                    {this.state.user.map((v) => (
                      <div className='col'>
                      <div className='Card '>
                            <div className=''>
                                  <h1>
                                    {v.age_group}
                                  </h1>
                            </div>
                            <div className=''>
                                <h2>
                                    {v.author}
                                </h2>
                                <p>
                                    {v.book_image_height}
                                </p>
                                <h4>
                                    {v}
                                </h4>
                            </div>
                      </div>
                  </div>
                  ))}
                </div>
             </div>
             </div>
             )
  }
}

export default backend;

