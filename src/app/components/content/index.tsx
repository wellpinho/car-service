interface Props {
    title: string;
    sub?: string;
    sx: string;
    h2sx?: string;
    psx?: string;
}
export const BannerComponent = ({ title, sub, sx, h2sx, psx }: Props) => {
    return (
        <div className={sx}>
            <div className="flex-col text-center max-w-5xl">
                <h2 className={h2sx}>{title}</h2>
                <p className={psx}>{sub}</p>
            </div>
        </div>
    );
};
