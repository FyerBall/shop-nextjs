import Button from "../../layout/Button";

function Seller() {
  return (
    <div className="text-center  flex flex-col items-center space-y-7  md:mt-44">
      <h1 className="font-bold tracking-wider uppercase text-5xl font-mono  mb-7 md:text-8xl ">
        Coming soon
      </h1>
      <p className="container mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
        blanditiis, magni alias labore aut itaque, officia deserunt autem
        laboriosam quis corrupti tempore? Consequuntur corporis itaque doloribus
        a exercitationem voluptatum incidunt! Natus modi veritatis eos ducimus
        atque totam aut eaque officiis provident. Distinctio nisi fuga atque
        eligendi neque facilis nulla dolorem fugit repellat saepe sed,
        dignissimos et provident porro earum amet!
      </p>
      <input
        className="border-2 w-80 p-2 rounded-md mx-auto"
        type="text"
        placeholder="enter your email to subscribe"
      />
      <Button>subscribe</Button>
    </div>
  );
}

export default Seller;
