export default function Home() :JSX.Element {
    return (
        <div>
            {import.meta.env.VITE_API_BASE_URL}
        </div>
    )
}