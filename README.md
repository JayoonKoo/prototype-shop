# Prototype shop

Redux 를 사용하지 않는 전역 상태 관리 예제 입니다.

상품 목록에서 주문할 아이템을 골라서 주문 목록을 관리하고, 주문 목록에서 개별 아이템을 삭제 혹은 전체 주문 목록을 삭제할 수 있습니다. 이를 위해서 상품 리스트와 주문 목록을 ContextApi 로 관리하고, useReduce를 사용하여 action 별로 상태를 dispatch할 수 있습니다.
