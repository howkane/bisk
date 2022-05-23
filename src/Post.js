import React from 'react';
import NewInput from "./NewInput";
import "./Post.css";

function Post ( {text} ) {
    return (
        <div className="post">
            <div className="post_body">
                <div className="post_header">
                    <div classname="post_headerDescription">
                        <p>{text}</p>
                    </div>
                </div>    
                <div className="post_footer">
                    {/*Icon*/}
                    {/*Icon*/}
                    {/*Icon*/}
                    <NewInput />
                </div>
            </div>    
        </div>    

    );
};

export default Post;


  
  
