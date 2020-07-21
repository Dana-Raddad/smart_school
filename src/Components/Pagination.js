import React, { Component } from 'react';

export class Pagination  extends Component {

render(){
    return (
        <p><div class="pagination">
                 <a href="#">&laquo;</a>
                 <a class="active" href="#">1</a>
                 <a  href="#">2</a>
                 <a href="#">3</a>
                 <a href="#">4</a>
                 <a href="#">5</a>
                 <a href="#">6</a>
                 <a href="#">&raquo;</a>
               </div></p> 
    );
    }

}
export default Pagination ;