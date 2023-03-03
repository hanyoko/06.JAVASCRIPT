//navigate("abc")
export const navigate = (to) => {
    const historyChangeEvent = new CustomEvent("historyChange", {
        detail: {to: to}
    })
    //이벤트 발생 !!!
    dispatchEvent(historyChangeEvent)
}