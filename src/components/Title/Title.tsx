import "./Title.css"

type TitleProps = {
    name: String
}

export const Title = (props: TitleProps) => {
    return (
        <div>
            <p>{props.name}</p>
        </div>
    )
}