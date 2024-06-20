const organizationTree = {
    name: "CEO",
    children: [
      {
        name: "CFO",
        children: [
          {
            name: "Finance Manager",
            children: [
              { name: "Senior Accountant" },
              { name: "Junior Accountant" },
            ],
          },
          {
            name: "Investment Manager",
            children: [
              { name: "Financial Analyst I" },
              { name: "Financial Analyst II" },
            ],
          },
        ],
      },
      {
        name: "CTO",
        children: [
          {
            name: "Engineering Manager",
            children: [
              { name: "Lead Developer" },
              { name: "Senior Developer" },
              { name: "Junior Developer" },
            ],
          },
          {
            name: "QA Manager",
            children: [
              { name: "Lead QA Engineer" },
              { name: "QA Engineer I" },
              { name: "QA Engineer II" },
            ],
          },
        ],
      },
      {
        name: "COO",
        children: [
          {
            name: "Operations Manager",
            children: [{ name: "HR Manager" }, { name: "Office Coordinator" }],
          },
          {
            name: "Customer Relations Manager",
            children: [
              { name: "Customer Support Specialist I" },
              { name: "Customer Support Specialist II" },
            ],
          },
        ],
      },
    ],
  };

const flatList = [];
var id = 1;

function buildFlatList(node, parentId=null, position=""){
    const newPosition = position ? `${node.name} > ${position}` : node.name;
    flatList.push({
        id: id++,
        name: node.name,
        position: newPosition,
        parentId: parentId
    })
    for (item of flatList){
        if (node.name == item.name){
            parentId = item.id;
        }
    }
    if (node.children){
        node.children.forEach(child => {
            buildFlatList(child, parentId, newPosition);
        });
    }
}
buildFlatList(organizationTree);
console.log(flatList);