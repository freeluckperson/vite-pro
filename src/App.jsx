import { useEffect, useState } from "react";







function App() {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(({ products }) => setFilter(products))
      .catch(error => console.log(error.message))
  }, [])

  return (
    <>
      <h1 className="text-bg-danger text-center mb-5">Card Layout</h1>
      <div className="container">
        <div className="row">
          {filter?.map((product, index) => (
            <div key={index} className="col-3 mb-4">
              <div className="card h-100">
                <img className="card-img-top" height={250} src={product.thumbnail} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title.substring(0, 6)}...</h5>
                  <p className="card-text">{product.price} $</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

}

export default App
