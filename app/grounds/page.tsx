"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import { GroundCardBlock } from "@/components/GroundCardBlock";
import { SearchForm } from "@/components/SearchForm";
import { SearchFormHeader } from "@/components/SearchFormHeader";
import { ModalSearch } from "@/components/ui/modalSearch";
import { Ground } from "../types/ground";
import { Loader } from "@/components/ui/loader";

export default function Grounds() {
  const [isSearchFormActive, setIsSearchFormActive] = useState(false);
  const [grounds, setGrounds] = useState<Ground[]>([]);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const location = searchParams.get("location") || "";
  const activity = searchParams.get("activity") || "";
  const date = searchParams.get("date");

  const baseUrl =
    "https://sportspace.onrender.com/api/service/sports-complexes/";
  const params = new URLSearchParams();
  params.append("location", location);
  params.append("activity", activity);
  if (date) {
    params.append("date", date);
  }

  const url = `${baseUrl}?${params.toString()}`;

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGrounds(data.results);

        console.log("Response data:", data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return (
    <div className="ownContainer flex flex-col gap-y-[24px] mt-[16px]">
      <div className="hidden md:block">
        <SearchForm />
      </div>
      <div className="md:hidden">
        <div
          id="searchFormMini"
          className="w-full border-[1px] border-gray20divider h-[40px] rounded-[100px] px-[16px] flex items-center gap-[8px] cursor-pointer"
          onClick={() => setIsSearchFormActive(true)}
        >
          <Image src="/images/Search.svg" alt="logo" width={24} height={24} />
          <p>Kyiv · Tennis</p>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {!!grounds.length ? (
            <section className="ownGrid mb-[60px]">
              {grounds.map((ground) => (
                <GroundCardBlock key={ground?.id} image="new_3.png" />
              ))}
              <GroundCardBlock image="new_2.png" />
              <GroundCardBlock image="new_1.png" />
              <GroundCardBlock image="new_4.png" />
              <GroundCardBlock image="new_5.png" />
              <GroundCardBlock image="new_4.png" />
            </section>
          ) : (
            <p className="m-auto text-gray50">
              There are no fields matching your criteria
            </p>
          )}
        </>
      )}

      <ModalSearch
        isActive={isSearchFormActive}
        setIsActive={setIsSearchFormActive}
      >
        <SearchFormHeader setIsActive={setIsSearchFormActive} />
      </ModalSearch>
    </div>
  );
}
