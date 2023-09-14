import React from 'react';
import './case.css';
// import Memberscore from './memberscore';

//修改 未完成
const CommentItem = (props) => {
  return (
    <div>
      <div className="commentitem">
        <div className="commentpeople">
          <img src={props.imgSrc} className="people" alt="People" />
          <b className='marq-name'>{props.name}</b>
          <div className='marq-stars'><img
            src="images\staffInfo-star.png"
            alt="start"
            style={{ clipPath: `inset(0 ${100 - props.stars * 20}% 0 0)` }}
          /></div>
        </div>
        <p>{props.content}</p>
      </div>

    </div>
  )
};
/* // function CommentItem({ imgSrc, stars, content }) { */
//   const [showMemberscore, setShowMemberscore] = useState(false);

//   // const toggleMemberscore = () => {
//   //   // 使用 setShowMemberscore 的前一個狀態值來切換 showMemberscore 的值
//   //   setShowMemberscore((prevShowMemberscore) => !prevShowMemberscore);
//   // };

//   return (
//     <div className="commentitem">
//       <div className="commentpeople">
//         <img src={imgSrc} className="people" alt="People" />
//         {/* {Array.from({ length: stars }).map((_, starIndex) => (
//           <img
//             key={starIndex}
//             src="images/icon-star.png"
//             className="caseicon"
//             alt="Star Icon"
//           />
//         ))} */}
//       </div>
//       <p>{content}</p>

//       {/* {showMemberscore && (
//         <div className="memberscore-overlay">
//           <Memberscore onClose={toggleMemberscore} />
//         </div>
//       )} */}
//     </div>
//   );
// }

export default CommentItem;
