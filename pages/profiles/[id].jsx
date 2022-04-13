export default function Profile({ profileData }) {
    return (
        <div>
            <h1>{profileData.name}</h1>
            <p>{profileData.recentReview.title}</p>
            <p>{profileData.recentReview.director}</p>
            <p>{profileData.recentReview.lead}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const paths =  [
        {
            params: {
                id:'1'
            }
        },
        {
            params: {
                id:'2'
            }
        }
    ]
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    //fetch data!

        let profileData =  params.id == 1 ? {
                id: 1,
                name: "Jack",
                recentReview: {
                    title: "Moon Knight",
                    director: "James Gunn",
                    lead: "Oscar Isaac"
                }
            } : {
                id: 2,
                name: "Po",
                recentReview: {
                    title: "Titanic",
                    director: "James Cameron",
                    lead: "Leonardo DiCaprio"
                }
            }

    return {
        props: {
            profileData
        }
    }
}