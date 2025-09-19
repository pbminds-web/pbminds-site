import React from "react";

const people = [
  { name: "Mangala ", title: "CEO" },
  { name: "Mangala ", title: "HR Head" }
];

export default function Team(){
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold">Leadership</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {people.map(p => (
            <div key={p.name} className="p-6 border rounded-2xl text-center">
              <div className="h-24 w-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-muted">{p.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
