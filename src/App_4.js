// Вам нужно создать рекурсивный компонент для отображения древовидной структуры данных.
//  Каждый узел дерева может иметь несколько дочерних узлов. Каждый узел должен иметь кнопку
//  "Развернуть" или "Свернуть",
//  которая позволяет отображать или скрывать его дочерние узлы.

// const data = {
//     name: 'root',
//     children: [
//         {
//             name: 'node1',
//             children: [
//                 {
//                     name: 'node1.1',
//                     children: [
//                         {
//                             name: 'node1.1.1',
//                             children: []
//                         },
//                         {
//                             name: 'node1.1.2',
//                             children: []
//                         }
//                     ]
//                 },
//                 {
//                     name: 'node1.2',
//                     children: []
//                 }
//             ]
//         },
//         {
//             name: 'node2',
//             children: []
//         }
//     ]
// };

import React from 'react';

const App_4 = () => {
	const data = [
		{
		name: 'root',
		children: [
			{
				name: 'node1',
				children: [
					{
						name: 'node1.1',
						children: [
							{
								name: 'node1.1.1',
								children: []
							},
							{
								name: 'node1.1.2',
								children: []
							}
						]
					},
					{
						name: 'node1.2',
						children: []
					}
				]
			},
			{
				name: 'node2',
				children: []
			}
			]
		}
	];
   

	return (
		<div>
			{data.map((child,index)=>(<Node key={index} node={child}></Node>))}
		</div>
	);
};

const Node = (props) => {
	const [hasChild, setHasChild] = React.useState(false);
	const toggleButton = () => {
		setHasChild(!hasChild)
	}
	return(
		<div className="">
			<div className="">
				<button onClick={toggleButton}>{hasChild ? 'Свернуть': 'Развернуть'}</button>
			</div>
			{
				props.node.children && hasChild && (props.node.children.map((child, index)=>(<Node key={index} node={child}></Node>)))
			}
		</div>
	)
}

export default App_4;


//const TreeNode = ({ node }) => {
//    const [isOpen, setIsOpen] = useState(false);

//    const toggleOpen = () => {
//        setIsOpen(!isOpen);
//    };

//    return (
//        <div>
//            <div onClick={toggleOpen}>
//                {isOpen ? '▼' : '►'} {node.name}
//            </div>
//            {isOpen && node.children && (
//                <div style={{ marginLeft: '20px' }}>
//                    {node.children.map((childNode, index) => (
//                        <TreeNode key={index} node={childNode} />
//                    ))}
//                </div>
//            )}
//        </div>
//    );
//};