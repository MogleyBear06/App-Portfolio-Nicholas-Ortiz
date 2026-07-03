import React from "react";
import ServicesTabs from '../ServicesTabs';

function Services({ currentPage, handlePageChange }) {
  return (
    <>
      <section className="container"
       style={{ 
        marginTop:'2.70vmin',
        marginBottom:'5vmin',
        }}>
          <div>
            <ServicesTabs
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
      </section>
    </>
  );
}

export default Services;
