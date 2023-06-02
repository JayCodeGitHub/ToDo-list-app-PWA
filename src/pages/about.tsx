export default function About() {
  return (
    <main className="absolute flex flex-col items-center justify-start w-full h-screen gap-5 transition-all bg-slate-100 dark:bg-gray-900">
      <section className="w-1/2 mx-auto mt-16">
        <h1 className="mb-12 text-3xl text-gray-900 transition-all dark:text-white">
          About
        </h1>
        <p className="text-xl text-gray-600 transition-all dark:text-gray-400">
          99% of the time this is what you want to use. When hooks are stable
          and if you refactor any of your class components to use hooks, you'll
          likely move any code from componentDidMount, componentDidUpdate, and
          componentWillUnmount to useEffect. The one catch is that this runs
          after react renders your component and ensures that your effect
          callback does not block browser painting. This differs from the
          behavior in class components where componentDidMount and
          componentDidUpdate run synchronously after rendering. It's more
          performant this way and most of the time this is what you want.
          However, if your effect is mutating the DOM (via a DOM node ref) and
          the DOM mutation will change the appearance of the DOM node between
          the time that it is rendered and your effect mutates it, then you
          don't want to use useEffect. You'll want to use useLayoutEffect.
          Otherwise the user could see a flicker when your DOM mutations take
          effect. This is pretty much the only time you want to avoid useEffect
          and use useLayoutEffect instead.
        </p>
      </section>
    </main>
  );
}
