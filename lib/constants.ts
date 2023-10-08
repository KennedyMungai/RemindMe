export enum CollectionColors {
  sunset = "bg-gradient-to-r from-red-500 to-orange-500",
  poppy = "bg-gradient-to-r from-red-500 to-rose-500",
  rosebud = "bg-gradient-to-r from-violet-500 to-purple-500",
  snowflake = "bg-gradient-to-r from-indigo-400 to-cyan-400",
  candy = "bg-gradient-to-r from-yellow-400 via-amber-400 to-red-400",
  firtree = "bg-gradient-to-r from-emerald-500 to-emerald-900",
  metal = "bg-gradient-to-r from-slate-500 to-slate-900",
  powder = "bg-gradient-to-r from-violet-200 to-pink-200",
}

export type CollectionColor = keyof typeof CollectionColors;
