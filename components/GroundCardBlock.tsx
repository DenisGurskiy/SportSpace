import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  image: string;
};

export const GroundCardBlock: React.FC<Props> = ({ image }) => {
  return (
    <div className="md:col-span-4 sm:col-span-1 col-span-full grid grid-cols-4 gap-x-[24px] gap-y-[8px] text-gray100Primary">
      <Link href="/grounds/1" className="w-full h-[220px] relative rounded-[24px] overflow-hidden col-span-full">
        <Image
          className="hover:scale-[1.1] transition duration-300 ease-in-out cursor-pointer"
          src={`/photos/${image}.jpg`}
          alt="Main picture"
          fill
          objectFit="cover"
        />
        <div className="w-[130px] h-[33px] bg-gray100Primary rounded-[28px] text-white absolute bottom-[8px] right-[8px] flex items-center justify-center">
          From 450₴/hr
        </div>
      </Link>
      <h3 className="font-semibold col-span-full">Tennis court in Kyiv</h3>
      <div className="col-span-full">
        <Button variant="badge">Tennis</Button>
      </div>
      <p className="text-gray50 text-[14px] font-normal col-span-full">
        12 Khreshchatyk Street, Kyiv, Ukraine
      </p>
      <Link href="/grounds/1" className="col-span-full">
        <Button variant="smallPrimary">Book</Button>
      </Link>
    </div>
  );
};
