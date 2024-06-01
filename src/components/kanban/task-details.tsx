import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Icons } from "../ui/icons"
import { Text } from "../ui/text"

export default function TaskDetails({
  category,
  title,
  taskDescription,
  dueDate,
  assignedTo,
  avatarUrl,
}: {
  category: string
  title: string
  taskDescription: string
  dueDate: string
  assignedTo?: string
  avatarUrl?: string
}) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Text
          variant={"small"}
          semibold
          className=" flex h-6  max-w-max items-center rounded-full bg-pink-100 px-3  text-pink-500"
        >
          {category}
        </Text>
        <div className="flex items-center justify-between">
          <Text variant={"medium"} semibold>
            {title}
          </Text>
          <div className="flex space-x-2">
            <Button variant={"ghost"}>
              <Icons.Pencil className="h-5 w-5 text-gray-500 hover:text-gray-700" />
            </Button>
            <Button variant={"ghost"}>
              <Icons.Trash className="h-5 w-5 text-gray-500 hover:text-gray-700" />
            </Button>
          </div>
        </div>
        <Text variant={"medium"}>{taskDescription}</Text>
        <div className="mb-4 flex items-center text-sm text-gray-500">
          <Icons.CalendarDays className="h-4 w-4 fill-current text-gray-300" />
          <span className="ml-1">{dueDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <Avatar className="mr-2 h-6 w-6 rounded-full">
            <AvatarImage
              src={
                avatarUrl ??
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              }
              className="object-cover"
            />
            <AvatarFallback>{assignedTo}</AvatarFallback>
          </Avatar>
          <Text variant={"small"} className="">
            {assignedTo}
          </Text>
        </div>
      </div>
    </>
  )
}