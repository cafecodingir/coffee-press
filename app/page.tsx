import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <p>Hello world</p>
      <button className="btn btn-primary group">
        <h2 className={`text-xl font-semibold`}>
          Click Here <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
        </h2>
      </button>

      <button className="btn btn-secondary no-animation group">
        <h2 className={`text-xl font-semibold`}>
          Click Here <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
        </h2>
      </button>
    </main>
  )
}
