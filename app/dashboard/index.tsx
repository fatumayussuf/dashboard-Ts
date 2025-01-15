let cards = [
    { title: "customers", description: "10", icon: "👤" },
    { title: "products sold", description: "1200", icon: "📈 " },
    { title: "profit made", description: "25000", icon: "💰" },
    // {title:"profits", description:"profit made", icon:"💰"}
    
  ];
export default function DashboardIndex(){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-gray-100">
          {cards.map((card) => (
            <div
              className="bg-white shadow rounded p-4 text-center space-y-2"
            >
              <div className="text-3xl">{card.icon}</div>
              <p className=" text-green-700 text-4xl">{card.description}</p>
              <h3 className="font-bold text-gray-600 text-sm">{card.title}</h3>
            </div>
          ))}
        </div>
)}


     

 