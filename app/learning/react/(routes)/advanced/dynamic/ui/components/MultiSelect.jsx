import demo from "@/public/img/demoSelect.png";
import Image from "next/image";
const MultiSelect = () => {
  return (
    <div>
      <h1 className="bg-gray-50 rounded-lg p-5 my-2 text-neutral-400 text-xl font-bold">
        MultiSelects From API
      </h1>

      <div className="bg-gray-50 p-5 mt-2 flex flex-col lg:flex-row items-center">
        <div className="shadow-lg">
          <Image src={demo} width={450} height={250} alt="demoSelect" />
        </div>
        <div className="p-3 flex-1">
          <p className="text-neutral-400 bg-gray-50 rounded-lg p-5 text-lg font-inter">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
            culpa dignissimos nobis eius earum expedita laborum molestiae libero
            nemo veniam ab omnis harum temporibus, optio exercitationem corporis
            ut cum! Exercitationem voluptates veniam ullam at quis harum illum
            labore? Rem nostrum quos dolore sunt id impedit repellat itaque iste
            voluptas. Odit quibusdam ullam unde sint voluptate ex,
            <br />
            <br /> iure nisi voluptatum nam, cumque maxime consequuntur nulla
            rem, quod pariatur. Magnam inventore ex, praesentium optio excepturi
            iure nesciunt iusto? Quia voluptatum optio consequatur, eum id
            quisquam debitis quasi dolor est deserunt perspiciatis voluptatem,
            atque, alias totam suscipit et consequuntur ipsam veniam. Quaerat
            repellendus, itaque dolores reprehenderit,
            <br />
            <br /> voluptatum ex corporis nihil corrupti at et quasi ad hic rem
            similique nam vel consectetur incidunt minus? Nostrum rerum ex quos,
            recusandae dolorem architecto laboriosam voluptatem impedit optio
            consequatur culpa soluta reprehenderit sunt cumque ducimus aut
            facilis. Consequuntur autem rem tempore tempora totam pariatur
            accusamus laboriosam temporibus culpa vel placeat reprehenderit
            dolore, cumque, voluptates, possimus facere! Quis nisi dolor libero?
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
