// eslint-disable-next-line react/prop-types
export function Square({isWinnerModal, isSelected, updateBoard, index, children}){

    const className =`${isWinnerModal ? 
        'w-[70px] h-[70px] pointer-events-none border-transparent' : 'w-[100px] h-[100px] border-[2px] border-[solid] border-[#eee] rounded-[5px] grid place-items-center cursor-pointer text-[48px]'} ${isSelected ? 'bg-[#09f] text-[#fff]': ''}`;

    const handleClick = () => {
        updateBoard(index);
    }

    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    );
}